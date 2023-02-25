import moon from '../assets/starter-code/assets/destination/image-moon.webp'
import mars from '../assets/starter-code/assets/destination/image-mars.webp'
import europa from '../assets/starter-code/assets/destination/image-europa.webp'
import titan from '../assets/starter-code/assets/destination/image-titan.webp'
import doug from '../assets/starter-code/assets/crew/image-douglas-hurley.webp'
import mark from '../assets/starter-code/assets/crew/image-mark-shuttleworth.webp'
import anou from '../assets/starter-code/assets/crew/image-anousheh-ansari.webp'
import vico from '../assets/starter-code/assets/crew/image-victor-glover.webp'
import tech1ls from '../assets/starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import tech1ps from '../assets/starter-code/assets/technology/image-launch-vehicle-portrait.jpg'

import tech2ls from '../assets/starter-code/assets/technology/image-space-capsule-landscape.jpg'
import tech2ps from '../assets/starter-code/assets/technology/image-space-capsule-portrait.jpg'

import tech3ls from '../assets/starter-code/assets/technology/image-spaceport-landscape.jpg'
import tech3ps from '../assets/starter-code/assets/technology/image-spaceport-portrait.jpg'

export const destImg = [

 {
   id:1,
ptxt:`See our planet as you’ve never seen it before.A perfect relaxing trip away to help
regain perspective and come back refreshed.While you’re there , take in some history
by visiting the Luna 2 and Apollo 11 landing sites.`
,
bgtxt:'MOON',
travelTime:'3 days',
avgd:'384,400km',
moon:moon,

 },
 {
   id:2,
   ptxt:`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
   the tallest planetary mountain in our solar system. It’s two and a half times 
   the size of Everest!    
 .`
  ,
  bgtxt:'MARS',

   travelTime:'9 months',
   avgd:'225 mil. km',
   moon:mars,
   
    },


 {
   id:3,
   ptxt:`  The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
   winter lover’s dream. With an icy surface, it’s perfect for a bit of 
   ice skating, curling, hockey, or simple relaxation in your snug 
   wintery cabin.`
  ,
  bgtxt:'EUROPA',

   travelTime:'3 years',
   avgd:'628 mil. km',
   moon:europa,
   
    },

  {
   id:4,
   ptxt:`The only moon known to have a dense atmosphere other than Earth, Titan 
   is a home away from home (just a few hundred degrees colder!). As a 
   bonus, you get striking views of the Rings of Saturn.
 .`
  ,
  bgtxt:'TITAN',

   travelTime:'7 years',
   avgd:'1.6 bil. km',
   moon:titan,
   
    },
]

export const crewsData = [

  {
    id:1,
 ptxt:`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
 and former NASA astronaut. He launched into space for the third time as 
 commander of Crew Dragon Demo-2.
`
 ,
 name:'DOUGLAS HURLEY',
 title:'Commander ',
 moon:doug,
 
  },
 
  {
    id:2,
 ptxt:`  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
 the Linux-based Ubuntu operating system. Shuttleworth became the first South 
 African to travel to space as a space tourist.
`
 ,
 name:'MARK SHUTTLEWORTH',
 title:'Mission Specialist',
 moon:mark,
 
  },
 
  {
    id:3,
 ptxt:`  Pilot on the first operational flight of the SpaceX Crew Dragon to the 
 International Space Station. Glover is a commander in the U.S. Navy where 
 he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
 station systems flight engineer. 

`
 ,
 name:'VICTOR GLOVER',
 title:'Pilot',
 moon:vico,
 
  },
 

    {
      id:4,
   ptxt:`  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
   Ansari was the fourth self-funded space tourist, the first self-funded woman to 
   fly to the ISS, and the first Iranian in space.
  `
   ,
   name:'ANOUSEH ANSARI',
   title:'Flight Engineer',
   moon:anou,
   
    },
   ]
 
export const techData = [
  {
    id:1,
    limg:tech1ls,
    pimg:tech1ps,
    ptxt:`  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!
  `,
name:'LAUNCH VEHICLE'
  },
  {
    id:2,
    limg:tech2ls,
    pimg:tech2ps,
    ptxt:`  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.
  `,
name:'SPACE CAPSULE'

  },
  {
    id:3,
    limg:tech3ls,
    pimg:tech3ps,
    ptxt:`  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.
  `,
name:'SPACEPORT'
  }
]