import * as React from 'react';
import FormContainer from './FormContainer';
import { UrlData } from '../UrlData';
import { serverUrl } from '../Helpers/Constants';
import axios from 'axios';
import DataTable from './DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setdata] = React.useState<UrlData[]>([]);
  const [reload, setreload] = React.useState<boolean>(false);

  const updateReloadState = ():void => {
    setreload(true); 
  }

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The response from the server is: ", response)
    setdata(response.data);
    setreload(false)
  }

  React.useEffect(()=>{
    fetchTableData();

  },[reload])


  return(
    <>
    <FormContainer updateReloadState = {updateReloadState} />
    <DataTable updateReloadState = {updateReloadState} data={data}/>
    </>
  ) ;
};

export default Container;
