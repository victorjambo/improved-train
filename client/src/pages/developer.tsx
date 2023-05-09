import React from "react";

const Developer: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 w-3/4">
      <div className="rounded-2xl py-5 px-4 sm:px-6 bg-[#1e1f25] h-fit">
        <h3 className="text-lg font-bold text-white pr-2">Developer tools</h3>
        <div className="text-md text-slate-500 dark:text-slate-400">This page is for testing purposes only</div>
      </div>
      <div className="rounded-2xl py-5 px-4 sm:px-6 bg-[#1e1f25] h-fit divide-y divide-[#3e3f4b]">
        <div className="font-semibold text-xl">Test Account</div>
        <div className="grid grid-cols-2 py-4">
          <div>Email:</div>
          <code className="bg-black rounded-md px-1 w-fit">admin@me.io</code>
        </div>

        <div className="grid grid-cols-2 py-4">
          <div>Password:</div>
          <code className="bg-black rounded-md px-1 w-fit">Pass@123</code>
        </div>

        <div className="pt-8 font-semibold text-xl">Links</div>
        <div className="grid grid-cols-2 py-4">
          <div>Github:</div>
          <a className="text-blue-600 after:content-['_↗']" href="https://github.com/victorjambo/improved-train">https://github.com/victorjambo/improved-train</a>
        </div>

        <div className="grid grid-cols-2 py-4">
          <div>App:</div>
          <a className="text-blue-600 after:content-['_↗']" href="https://supply-chain-zrljofgitq-uc.a.run.app/">https://supply-chain-zrljofgitq-uc.a.run.app/</a>
        </div>

        <div className="grid grid-cols-2 py-4">
          <div>REST API:</div>
          <a className="text-blue-600 after:content-['_↗']" href="https://supply-chain-api-zrljofgitq-uc.a.run.app/">https://supply-chain-api-zrljofgitq-uc.a.run.app/</a>
        </div>

        <div className="grid grid-cols-2 py-4">
          <div>Local BE:</div>
          <a className="text-blue-600 after:content-['_↗']" href="http://localhost:4000">http://localhost:4000</a>
        </div>
      </div>
    </div>
  );
};

export default Developer;
