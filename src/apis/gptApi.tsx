import { HTTP_URL } from './index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GptTextArtComponent = () => {
  const [gptResponses, setGptResponses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${HTTP_URL}/text/1`);
        setGptResponses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>GPT Responses - Art</h1>
      {gptResponses.map((response, index) => (
        <div key={index}>
          <h2>{response}</h2>
        </div>
      ))}
    </div>
  );
};

const GptTextCultureComponent = () => {
  const [gptResponses, setGptResponses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${HTTP_URL}/text/2`);
        setGptResponses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>GPT Responses - Culture</h1>
      {gptResponses.map((response, index) => (
        <div key={index}>
          <h2>{response}</h2>
        </div>
      ))}
    </div>
  );
};

const GptTextTechComponent = () => {
  const [gptResponses, setGptResponses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${HTTP_URL}/text/3`);
        setGptResponses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>GPT Responses - Tech</h1>
      {gptResponses.map((response, index) => (
        <div key={index}>
          <h2>{response}</h2>
        </div>
      ))}
    </div>
  );
};

export { GptTextArtComponent, GptTextCultureComponent, GptTextTechComponent };
