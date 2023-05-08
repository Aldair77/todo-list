export const baseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://51.79.109.253:8000';
    }
    // return 'https://orbitrack.api.s3.orbitec.pe';
    return 'https://dev.back.orbitrack.orbitec.pe';
  };
  
  export const baseUrlReports = () => {
    if (process.env.NODE_ENV === 'development') {
      return `${baseUrl()}/new_reports`;
    }
    return `${baseUrl()}/new_reports`;
  };