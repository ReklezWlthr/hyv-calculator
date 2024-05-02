import { useState } from 'react'
import { CharacterBlock } from '../components/character_block'
import _ from 'lodash'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

const CharacterSelect = ({ onClick, isSelected }: { onClick: () => void; isSelected: boolean }) => {
  return (
    <div
      className={classNames('w-full rounded-lg cursor-pointer bg-primary-dark duration-200', {
        'ring-2 ring-offset-2 ring-offset-transparent ring-primary-lighter': isSelected,
      })}
      onClick={onClick}
    >
      1
    </div>
  )
}

export const TeamSetup = observer(() => {
  const [selected, setSelected] = useState(0)
  const [team, setTeam] = useState(Array(4))

  return (
    <div className="flex w-5/6 gap-5 p-5 overflow-y-scroll">
      <div className="w-1/4">
        <p className="flex justify-center font-semibold text-white">Team Members</p>
        <div className="flex w-full gap-2 pt-1 pb-3">
          {_.map(team, (item, index) => (
            <CharacterSelect
              key={`char_select_${index}`}
              onClick={() => setSelected(index)}
              isSelected={index === selected}
            />
          ))}
        </div>
        <CharacterBlock index={selected} />
      </div>
    </div>
  )
})
