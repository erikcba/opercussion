import { useState } from 'react'
import member1Img from '../assets/members1.png'
import member2Img from '../assets/members2.png'
import member3Img from '../assets/members3.png'
import member4Img from '../assets/members4.png'
import member5Img from '../assets/members5.png'
import MemberImg from '../components/MemberImg'
import carouselImg1 from '../assets/carouselImg1.png'
import carouselImg2 from '../assets/carouselImg2.png'
import carouselImg3 from '../assets/carouselImg3.png'
import carouselImg4 from '../assets/carouselImg4.png'
import carouselImg5 from '../assets/carouselImg5.png'


import MemberCarousel from '../components/MemberCarousel'


const Members = () => {
  
  const [selectedMember, setSelectedMember] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  
  const members = [
    { id: 1, img: member1Img, name: 'Claudio Estay', description: 'Claudio hails from Santiago de Chile and, if his parents had had their way, he would be an architect today—but his love for music was stronger. Claudio initially played as a solo timpanist with the Hofer Symphoniker for six years before becoming a percussionist with the Bavarian State Orchestra in 2013. He likes drums more than mallets, but of course loves all percussion instruments.', carouselImg: carouselImg1 },
    { id: 2, img: member2Img, name: 'Maxime Pidoux', description: 'Maxime was born in Paris to a family of musicians. After two years of piano lessons, he finally decided to play the drums. He was with the Bavarian State Orchestra from 2016 to 2022 and is now solo timpanist at La Scala in Milan. He describes everything that has a skin and sounds good as his favorite instrument.', carouselImg: carouselImg2 },
    { id: 3, img: member3Img, name: 'Pieter Roijen', description: 'Pieter grew up in the Netherlands and became solo timpanist in Het Gelder Orkest (which unfortunately no longer exists). From 2007 to 2022 he was assistant solo timpanist and percussionist with the Bavarian State Orchestra; since February 2022, he is solo timpanist (coord.). His favorite instrument is the triangle :) Pieter currently has four little hobbies that keep him busy—they are 13, 11, 9 and 4 years old.', carouselImg: carouselImg3 },
    { id: 4, img: member4Img, name: 'Tomás Toral', description: 'Originally from Mallorca, Tomàs has been a percussionist with the Bavarian State Opera since January 2023. Rather than having a single favorite instrument, he enjoys playing a wide variety, keeping them all in regular rotation. Outside of music, he has a passion for cooking, which he loves to explore in his free time.', carouselImg: carouselImg4 },
    { id: 5, img: member5Img, name: 'Carlos Vera Larrucea', description: 'Carlos grew up in Santiago de Chile. He was first deputy solo timpanist at Teatro Municipal de Santiago (national opera in Chile) before joining the Bavarian State Opera in 2015. Carlos loves the vibraphone, plays a little guitar and learned to play the recorder as a child.', carouselImg: carouselImg5 }
  ]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 110;
    const sectionPosition = section.offsetTop - offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  }

  const handleMemberClick = (member, index) => {
    setSelectedMember(member);
    setSelectedIndex(index);
    setTimeout(() => {
      scrollToSection('memberCarousel')
    }, 100);
  };

  const closeCarousel = () => {
    setSelectedMember(null);
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % members.length);
    setSelectedMember(members[(selectedIndex + 1) % members.length]);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
    setSelectedMember(members[(selectedIndex - 1 + members.length) % members.length]);
  };

  return (
    <div className='self-center flex flex-col gap-5 py-10 w-full'>
      <h1 className='text-4xl font-semibold text-center text-fuchsia-800'>Members</h1>
      <div className='flex flex-row justify-between '>
        {members.length > 0 ? (
          members.map((member, index) => (
            <div key={member.id} onClick={() => handleMemberClick(member, index)}>
              <MemberImg image={member.img} name={member.name} />
            </div>
          ))
        ) : (
          <p>No hay miembros</p>
        )}
      </div>
      {selectedMember && (
        <MemberCarousel member={members[selectedIndex]} onClose={closeCarousel} onNext={handleNext} onPrev={handlePrev} />
      )}
    </div>
  )
}

export default Members
