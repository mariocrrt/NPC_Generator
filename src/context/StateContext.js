import React, { createContext, useState } from 'react'
import npcChoices from '../npc_data/npc_choices'
import family_names from '../npc_data/family_names'
import female_names from '../npc_data/female_names'
import genders from '../npc_data/genders'
import male_names from '../npc_data/male_names'
import class_type from '../npc_data/dnd_classes'
import damage from '../npc_data/damage'
import weapons from '../npc_data/weapons'
import races from '../npc_data/races'

export const StateContext = createContext()

export function StateContextProvider(props) {
    const [familyName, setFamilyName] = useState('')
    const [femaleName, setFemaleName] = useState('')
    const [maleName, setMaleName] = useState('')
    const [classType, setClassType] = useState('')
    const [damageDice, setDamage] = useState('')
    const [weapon, setWeapon] = useState('')
    const [armorClass, setArmorClass] = useState('')
    const [race, setRace] = useState('')
    const [npcData, setNpcData] = useState(npcChoices)
  
    const min = 10
    const max = 20

    const createNpc = () => {
        genderChoice()
        familyNameChoice()
        classTypeChoice()
        damageChoice()
        weaponChoice()
        armorClassChoice()
        raceChoice()

        if (npcData.gender === 'Male') {
            setFemaleName()
            maleNameChoice()
        } else if (npcData.gender === 'Female') {
            setMaleName()
            femaleNameChoice()
        }
    }

    const genderChoice = () => {
        npcData.gender = genders[Math.floor(Math.random() * genders.length)]
    }

    const maleNameChoice = () => {
        setMaleName(male_names[Math.floor(Math.random() * male_names.length)])
    }

    const femaleNameChoice = () => {
        setFemaleName(female_names[Math.floor(Math.random() * female_names.length)])
    }

    const familyNameChoice = () => {
        setFamilyName(family_names[Math.floor(Math.random() * family_names.length)])
    }

    const classTypeChoice = () => {
        setClassType(class_type[Math.floor(Math.random() * class_type.length)])
    }

    const damageChoice = () => {
        setDamage(damage[Math.floor(Math.random() * damage.length)])
    }

    const weaponChoice = () => {
        setWeapon(weapons[Math.floor(Math.random() * weapons.length)])
    }

    const armorClassChoice = () => {
        setArmorClass(Math.floor(Math.random() * (max - min + 1) + min))
    }

    const raceChoice = () => {
        setRace(races[Math.floor(Math.random() * races.length)])
    }

    return(
        <StateContext.Provider value={{ 
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
        }}>
            {props.children}
        </StateContext.Provider>
    )
}