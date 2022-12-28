import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Job from './components/Job';

const URL = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const valueHandler = (index) => {
    setValue(index);
  };

  let finalJSX;
  if (loading) {
    finalJSX = <Loading />;
  } else {
    finalJSX = (
      <Job {...jobs[value]} jobs={jobs} onClick={valueHandler} value={value} />
    );
  }

  return <>{finalJSX}</>;
}

export default App;
