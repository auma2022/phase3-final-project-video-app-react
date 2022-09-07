import React from 'react'

function Card({type}) {
  return (
    <div className="w-[360px] mb-[10px] flex gap-[10px] cursor-pointer">
      <div type={type}>
        <img className="w-[100%] h-[120px] bg-[#999] fle"
          type={type} alt='pic'
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        <div type={type} className="flex mt-16 gap-[12px] fle">
          <img className="w-[36px] h-[36px] rounded[50%] bg-[#999] shadow-sm "
            type={type} alt="pic"
            src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <div>
            <h2 className='font-bold text-blue-900 text-[16px]'>Test Video</h2>
            <p className='text-[13px] text-blue-900 m-9'>Lama Dev</p>
            <info className='text-[13px] text-blue-900' >660,908 views • 1 day ago</info>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card