import { BulletPoint, Collapsible } from '@src/presentation/components/collapsible'
import { observer } from 'mobx-react-lite'

export const HelpModal = observer(() => {
  return (
    <div className="w-[50vw] bg-primary-dark rounded-lg p-3 space-y-2">
      <p className="text-lg font-bold text-white">Quick Guide</p>
      <Collapsible label="Team Setup">
        <p>This page contains 3 main sections:</p>
        <p>
          1. <b className="text-desc">Character</b>: allows you to select your character for the slot, as well as
          specifying their level, ascension, constellations, and talent levels.
        </p>
        <BulletPoint>
          To change your character, click the box below <span className="text-desc">Name</span>. This will bring up a
          modal for character selection. Inputs for character's level, ascension and constellations are right below, and
          will be disabled until a character is chosen.
        </BulletPoint>
        <BulletPoint>
          Once a character is chosen, you may additionally change their talent levels. Please note that this level does
          not include additional level gained through constellations.
        </BulletPoint>
        <BulletPoint>
          Character's stats are also displayed below. These values does not take any conditional effects into account.
          To view the character's final stats after conditionals, please head to the{' '}
          <b className="text-red">Damage Calculator</b> page.
        </BulletPoint>
        <p className="pt-1">
          2. <b className="text-desc">Weapon</b>: allows you to select your character's weapon.
        </p>
        <BulletPoint>
          You can hover the <i className="fa-regular fa-question-circle indent-0" /> icon for the weapon's passive at
          the chosen refinement.
        </BulletPoint>
        <p className="pt-1">
          3. <b className="text-desc">Artifacts</b>: allows you to customize your character's artifacts.
        </p>
        <BulletPoint>
          Adding a new artifact will create it in your <b className="text-red">Artifact Inventory</b> while equipping an
          artifact will instead allow you to choose any existing ones from there.
        </BulletPoint>
        <BulletPoint>
          Once equipped, hover over the artifact card for options to edit, swap, unequip or delete the artifact.
        </BulletPoint>
        <BulletPoint>
          The set bonus for equipped artifacts and the team's elemental resonance can be found at the bottom. Hover
          their name to display the effects.
        </BulletPoint>
        <BulletPoint>
          You may save a set of artifacts as build using the button on the bottom right of the page. You can also
          fast-equip a saved build from there as well.
        </BulletPoint>
      </Collapsible>
      <Collapsible label="Damage Calculator">
        <p>
          You can see the damage each character deals here, including those from Reactions. Hover over each number for a
          formula breakdown.
        </p>
        <BulletPoint>
          <b className="text-heal">Healing</b> amount is defaulted to self-healing amount{' '}
          <i className="text-xs">(Healing Bonus + Incoming Healing)</i>. <b className="text-indigo-300">Shield</b> value
          also displays raw value without bonuses from Shield Strength or Elemental Absorption. More detailed values can
          be found in the formula breakdown.
        </BulletPoint>
        <BulletPoint>
          The row on the right allows you to toggle the character's conditional effects that can take effect on them.
          Hover the name for the detail on the effect's source.
        </BulletPoint>
        <BulletPoint>
          The calculator calculates the stats for every character in the team at once. Effects that are dependent on a
          character's stats (e.g. Rosaria's A4 or Bennett's Burst) will automatically use the calculated amount. You
          only have to toggle it.
        </BulletPoint>
        <BulletPoint>
          Character's stats displayed here are the final value that includes all the applicable buffs.
        </BulletPoint>
        <BulletPoint>
          Target enemy's level and DMG RES can be set in <span className="text-desc">Enemy Setting</span> menu.
        </BulletPoint>
      </Collapsible>
    </div>
  )
})
