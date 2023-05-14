import axios from '../helpers/axios.helper';
import {
  Application,
  ApplicationResponse,
} from '../interfaces/application/applicationResponse';

function getApplication() {
  return axios.get<ApplicationResponse>(`/applications/application`);
}

async function createApplication(data: Application) {
  try {
    const response = await axios.post('/applications', data);
    return response.data;
  } catch (error: any) {
    if (error?.response?.data && error?.response?.data.message) {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error(
        'Se produjo un error inesperado, intenté de nuevo más tarde.'
      );
    }
  }
}
// function createApplication(data: Application) {
//   return axios.post('/applications', data);
// }

function updateApplication(data: Partial<Application>) {
  return axios.put(`/applications/application`, data);
}

function addDocumentPhoto(data: any) {
  return axios.post('/applications/add-photo', data);
}

export {
  getApplication,
  createApplication,
  updateApplication,
  addDocumentPhoto,
};
