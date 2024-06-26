#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import axios from 'axios';

const program = new Command();

const api_key = "msy_71TlZfQPhg5RgkpwHIGeoXOsPEM36opN35Tx";
const headers = { Authorization: `Bearer ${api_key}` };

program
  .command('create-task')
  .description('Create a new task')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'prompt',
        message: 'Enter the prompt:',
      }
    ]);

    const payload = {
      mode: 'preview',
      prompt: answers.prompt,
      art_style: 'realistic',
      negative_prompt: 'low quality, low resolution, low poly, ugly',
    };

    try {
      const response = await axios.post(
        'https://api.meshy.ai/v2/text-to-3d',
        payload,
        { headers }
      );
      console.log('Task ID:', response.data.result);
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  });

program
  .command('get-model <taskId>')
  .description('Get the model data by task ID')
  .action(async (taskId) => {
    try {
      let status = 'IN_PROGRESS';
      while (status === 'IN_PROGRESS') {
        const response = await axios.get(
          `https://api.meshy.ai/v2/text-to-3d/${taskId}`,
          { headers }
        );

        status = response.data.status;

        if (status === 'SUCCEEDED') {
          const { model_urls, thumbnail_url } = response.data;
          if (model_urls && model_urls.glb) {
            console.log('glb Model URL:', model_urls.glb);
            console.log('Thumbnail URL:', thumbnail_url);
          } else {
            console.log('glb Model URL not found in the response.');
          }
        } else if (status === 'IN_PROGRESS') {
          console.log('Please wait, the model is still being rendered.');
          // Wait for a few seconds before checking again
          await new Promise(resolve => setTimeout(resolve, 5000));
        } else {
          console.log(`Task status: ${status}`);
          break;
        }
      }
    } catch (error) {
      console.error('Error fetching model:', error.message);
    }
  });

program.parse(process.argv);