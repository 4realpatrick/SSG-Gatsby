import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
const Todos:React.FC = () => {
  useEffect(()=>{
    fetch('http://localhost:3002/todos').then(res=>{
      console.log('todos:',res);
    }).catch(error=>console.log(error))
  },[])
  return (
    <Layout>
      <div className="w-1/4 h-auto border-purple-700 border-2 pt-10 pl-10 m-10">
        dsfsdfsf
      </div>
    </Layout>
  )
}
export default Todos