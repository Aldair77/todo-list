export const baseUrl = () => {
    if (import.meta.env.MODE === 'development') {
      return 'https://dev.back.orbitrack.orbitec.pe'; // -- PRUEBAS NUBE
    }
    return 'https://orbitrack.api.s3.orbitec.pe'; // -- PRODUCCION
  };
  
  export const baseUrlReports = () => {
    if (process.env.NODE_ENV === 'development') {
      return `${baseUrl()}/new_reports`;
    }
    return `${baseUrl()}/new_reports`;
  };
  