import Image from 'next/image'

import myphoto from '../../../public/maphoto.jpg'

export default function AvatarWithAnimatedBorder() {
  return (
    <div className="relative inline-block w-24 h-24 rounded-full overflow-hidden">
      {/* Your circular image */}
      <Image
        priority
        src={myphoto}
        alt="Avatar"
        className="w-full h-full object-cover rounded-full"
      />

      {/* Animated circular border */}
      <div className="absolute inset-0 flex items-center justify-center animate-spin-slow pointer-events-none">
        <div
          className="absolute inset-0 rounded-full border-[2px] border-transparent"
          style={{
            borderImage: 'conic-gradient(black, gold, black, gold) 1',
            borderStyle: 'solid',
          }}
        />
      </div>
    </div>
  )
}
