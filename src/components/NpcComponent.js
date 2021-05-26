import { StateContext } from '../context/StateContext'
import { useContext } from 'react'

export default function NpcComponent() {
    const { 
        familyName, 
        femaleName, 
        maleName, 
        classType, 
        damageDice, 
        weapon, 
        armorClass, 
        race, 
        createNpc, 
        npcData 
    } = useContext(StateContext);

    return(
        <div className='container'>
            { maleName 
                ? <p><strong>First name:</strong> {maleName}</p> 
                : <p><strong>First name:</strong> {femaleName}</p>
            }
            <p><strong>Last name:</strong> {familyName}</p>
            <p><strong>Gender:</strong> {npcData.gender}</p>
            <p><strong>Race:</strong> {race}</p>
            <p><strong>Class:</strong> {classType}</p>
            <p><strong>Weapon:</strong> {weapon} </p>
            <p><strong>Armor Class:</strong> {armorClass}</p>
            <p><strong>Damage:</strong> {damageDice}</p>
            <button onClick={createNpc}>Create NPC</button>
        </div>
    )
}