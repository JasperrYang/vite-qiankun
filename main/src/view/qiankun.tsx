import { useEffect } from "react";
import { registerMicroApps, start } from 'qiankun';

const Qiankun = () => {
  useEffect(() => {
    registerMicroApps(
      [
        {
          name: 'react',
          entry: 'http://localhost:7107/qiankun/home',
          container: '#container',
          activeRule: '/qiankun',
        },
      ]
    );

    start({
      prefetch: false,
      sandbox: false,
    });
  }, []);

  return <h1>qiankun</h1>
}

export default Qiankun;