import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Gemini风格的主页 */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">AI Workflow Assistant</span>
        <span className="block text-blue-600">简单对话，轻松创建</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
        告别复杂的工作流配置，只需通过自然语言对话，
        即可快速创建和管理您的智能工作流程。
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
        <div className="rounded-md shadow">
          <button
            onClick={() => navigate('/chat')}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            开始对话
          </button>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            onClick={() => navigate('/workflow')}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
          >
            浏览模板
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
