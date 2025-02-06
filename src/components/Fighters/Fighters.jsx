import { useState } from 'react'
import "./Fighters.css"

function Fighters() {
    const [zombieFighters, setZombieFighters] = useState([
        {
            id: 1,
            name: 'Survivor',
            price: 12,
            strength: 6,
            agility: 4,
            img: 'https://wallpapercave.com/wp/hFzJ78N.jpg',
        },
        {
            id: 2,
            name: 'Scavenger',
            price: 10,
            strength: 5,
            agility: 5,
            img: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Disney-Character-Wallpapers-HD-Desktop.jpg',
        },
        {
            id: 3,
            name: 'Shadow',
            price: 18,
            strength: 7,
            agility: 8,
            img: 'https://harunmudak.com/wp-content/uploads/2020/12/cute-cartoon-characters-1.png',
        },
        {
            id: 4,
            name: 'Tracker',
            price: 14,
            strength: 7,
            agility: 6,
            img: 'https://pluspng.com/img-png/png-disney-characters-pinoc-png-2000.png',
        },
        {
            id: 5,
            name: 'Sharpshooter',
            price: 20,
            strength: 6,
            agility: 8,
            img: 'https://www.fotolip.com/wp-content/uploads/2016/06/disney-cartoon_575a742bc182c.jpg',
        },
        {
            id: 6,
            name: 'Medic',
            price: 15,
            strength: 5,
            agility: 7,
            img: 'https://2.bp.blogspot.com/-RgxTTFbpAgY/UUCAUA7CS9I/AAAAAAAAGLU/TLqTuhXjhXc/s1600/16.png',
        },
        {
            id: 7,
            name: 'Engineer',
            price: 16,
            strength: 6,
            agility: 5,
            img: 'https://tse2.mm.bing.net/th?id=OIP.hn7emSifAATkd1lysjoyzQHaIS&pid=Api',
        },
        {
            id: 8,
            name: 'Brawler',
            price: 11,
            strength: 8,
            agility: 3,
            img: 'https://4.bp.blogspot.com/-i_RV7V9aNK4/Uhx3wf9e4aI/AAAAAAAATL4/Q6Eh2_FY_c8/s1600/picme3.png',
        },
        {
            id: 9,
            name: 'Infiltrator',
            price: 17,
            strength: 5,
            agility: 9,
            img: 'https://www.freeiconspng.com/uploads/little-einsteins-cartoon-characters-png-3.png',
        },
        {
            id: 10,
            name: 'Leader',
            price: 22,
            strength: 7,
            agility: 6,
            img: 'https://1.bp.blogspot.com/-ZhjVLFwu8Ak/VNongaSImuI/AAAAAAAAxiw/vpRzGZfcQKE/s1600/0_87359_85604ac5_orig.png',
        },
    ])
    const [team, setTeam] = useState([]);

    const[money, setMoney]= useState(100);

    const [totalStrength, setTotalStrength]= useState(0);

    const [totalAgility, setTotalAgility] = useState(0)

    const handleAddFighter = (fighter) => {
        if (fighter.price > money) {
          alert('Insufficient Funds')
          return;
        } 
            
        setTeam([...team, fighter])
        setMoney( (money) => money - fighter.price)
        setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id))
        setTotalStrength((totalStrength)  => totalStrength + fighter.strength)
        setTotalAgility((totalAgility) => totalAgility + fighter.agility)

      }
      console.log(team, 'Add team')
      
      
      const handleRemovalFighter = (fighterId) => {
        const fighterToRemove = team.find((f) => f.id === fighterId);

        if (fighterToRemove) {
            setTeam(team.filter(t => t.id !== fighterId))
            setMoney(money + fighterToRemove.price)
            setZombieFighters((zombieFighters) => [...zombieFighters, fighterToRemove ])
            setTotalStrength((totalStrength) => totalStrength - fighterToRemove.strength)
            setTotalAgility((totalAgility) => totalAgility - fighterToRemove.agility)
        }    
            
        
      }  
      
    
    
      return (
        <>
          <h1>Zombie Fighters</h1>
          <h3><strong>Money: ${money}</strong></h3>
          <h3><strong>Team Strength: {totalStrength} </strong></h3>
          <h3><strong>Team Agility: {totalAgility} </strong></h3>
          <h3>Fighters</h3>
              <ul>
              {zombieFighters.map((zombieFighter, id) => (
                <li key={id}>  <img src={zombieFighter.img} /> <br /> <strong>{zombieFighter.name}</strong> | Price: ${zombieFighter.price} | strength: {zombieFighter.strength} | agility: {zombieFighter.agility} <br />
                  <button onClick={() => handleAddFighter(zombieFighter)}>Add fighter</button>
                </li>
              ))}
            </ul>
          
          <div>
            <h3>Team</h3>
            <h3><strong>Money: ${money}</strong></h3>
            <p>Total Strength: {totalStrength}</p>
            <p>Total Agility: {totalAgility}</p>
           
            <div>
            
            {team.length === 0 ? <p>pick some team members!</p>:(
              <ul>
                {
                    team.map(fighter => (
                        <li key={fighter.id}>
                            <span><img src={fighter.img}  /> <br /> <strong>{fighter.name}</strong> | Price: ${fighter.price} |strength: {fighter.strength} | agility: {fighter.agility} <br /> </span>

                        <button onClick={() => handleRemovalFighter(fighter.id)}>Remove fighter</button>
                        
                        </li>
                    ))
                }
              </ul>
            )}
            </div>
          </div>
    
    
        </>
    
      );


}


export default Fighters