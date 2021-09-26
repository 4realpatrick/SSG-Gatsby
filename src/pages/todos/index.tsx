import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
const Todos:React.FC = () => {
  useEffect(()=>{
    fetch('http://localhost:3002/todos').then(res=>{
      console.log('todos:',res);
    }).catch(error=>console.log('Error:',error))
  },[])
  return (
    <Layout>
      <div className="border-purple-700 border-2 m-10 flex items-start justify-center h-96 pt-4">
        <span className="text-5xl font-semibold capitalize">todos</span>
      </div>
    </Layout>
  )
}
export default Todos