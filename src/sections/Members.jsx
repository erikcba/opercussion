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
import { useTranslation } from 'react-i18next'



import MemberCarousel from '../components/MemberCarousel'


const Members = () => {
  
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const claudioDesc = t('claudio')
  const maximeDesc = t('maxime')
  const pieterDesc = t('pieter')
  const tomasDesc = t('tomas')
  const carlosDesc = t('carlos')
  
  const members = [
    { id: 1, img: member1Img, name: 'Claudio Estay', description: claudioDesc, carouselImg: carouselImg1 },
    { id: 2, img: member2Img, name: 'Maxime Pidoux', description: maximeDesc, carouselImg: carouselImg2 },
    { id: 3, img: member3Img, name: 'Pieter Roijen', description: pieterDesc, carouselImg: carouselImg3 },
    { id: 4, img: member4Img, name: 'Tomás Toral', description: tomasDesc, carouselImg: carouselImg4 },
    { id: 5, img: member5Img, name: 'Carlos Vera Larrucea', description: carlosDesc, carouselImg: carouselImg5 }
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
      <div className='flex flex-row 2xl:justify-between justify-center sm:gap-0 gap-3 items-center sm:flex-nowrap flex-wrap'>
        {members.length > 0 ? (
          members.map((member, index) => (
            <div key={member.id} onClick={() => handleMemberClick(member, index)} className='sm:w-auto w-5/12'>
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
