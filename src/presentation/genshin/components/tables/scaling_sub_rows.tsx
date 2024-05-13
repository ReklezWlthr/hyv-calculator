import { StatObjectT } from '@src/core/hooks/useStat'
import { IScaling } from '@src/domain/genshin/conditional'
import { Element, TalentProperty } from '@src/domain/genshin/constant'
import classNames from 'classnames'
import _ from 'lodash'
import { observer } from 'mobx-react-lite'
import { StatNameMap } from '../../../../core/hooks/useStat'
import { Tooltip } from '@src/presentation/components/tooltip'
import { toPercentage } from '@src/core/utils/converter'

interface ScalingSubRowsProps {
  scaling: IScaling
  stats: StatObjectT
}

export const ScalingSubRows = observer(({ scaling, stats }: ScalingSubRowsProps) => {
  const propertyColor = {
    [TalentProperty.HEAL]: 'text-green-300',
    [TalentProperty.SHIELD]: 'text-blue-200',
  }

  const elementColor = {
    [Element.PHYSICAL]: 'text-gray',
    [Element.PYRO]: 'text-genshin-pyro',
    [Element.HYDRO]: 'text-genshin-hydro',
    [Element.CRYO]: 'text-genshin-cryo',
    [Element.ELECTRO]: 'text-genshin-electro',
    [Element.GEO]: 'text-genshin-geo',
    [Element.ANEMO]: 'text-genshin-anemo',
    [Element.DENDRO]: 'text-genshin-dendro',
    ...propertyColor,
  }

  const bonusDMG = (scaling.bonus || 0) + stats.dmg + stats[scaling.element.toLowerCase()]
  const dmg = _.sumBy(scaling.value, (item) => item.scaling * stats[StatNameMap[item.multiplier]]) * (1 + bonusDMG)
  const totalCr = stats.cRate + (scaling.cr || 0)
  const totalCd = stats.cDmg + (scaling.cd || 0)

  const scalingArray = _.map(
    scaling.value,
    (item) =>
      `<span>(<span>${_.floor(stats[StatNameMap[item.multiplier]])}</span> * <span>${toPercentage(
        item.scaling
      )}</span>)</span>`
  )
  const baseScaling = _.join(scalingArray, ' + ')
  const shouldWrap = !!scaling.flat && scalingArray.length > 1
  const baseWithFlat = scaling.flat ? _.join([baseScaling, _.floor(scaling.flat)], ' + ') : baseScaling

  const formulaString = `<b class="${propertyColor[scaling.property] || 'text-red'}">${_.floor(dmg)}</b> = ${
    shouldWrap ? `{${baseWithFlat}}` : baseWithFlat
  }${bonusDMG > 0 ? ` * (1 + <span>${toPercentage(bonusDMG)}</span>)` : ''}`

  return (
    <div className="grid items-center grid-cols-8 gap-2 pr-2">
      <p className="col-span-2 text-center">{scaling.property}</p>
      <p className={classNames('col-span-1 text-center', elementColor[scaling.element])}>{scaling.element}</p>
      <Tooltip title={scaling.name} body={<p dangerouslySetInnerHTML={{ __html: formulaString }} />} style="w-[500px]">
        <p className="col-span-1 text-center text-gray">{_.round(dmg)}</p>
      </Tooltip>
      <p className="col-span-1 text-center text-gray">
        {_.includes([TalentProperty.HEAL, TalentProperty.SHIELD], scaling.property)
          ? '-'
          : _.round(dmg * (1 + totalCd))}
      </p>
      <p className={classNames('col-span-1 font-bold text-center', propertyColor[scaling.property] || 'text-red')}>
        {_.includes([TalentProperty.HEAL, TalentProperty.SHIELD], scaling.property)
          ? _.round(dmg)
          : _.round(dmg * (1 + totalCd * totalCr))}
      </p>
      <p className="col-span-2 text-xs truncate" title={scaling.name}>
        {scaling.name}
      </p>
    </div>
  )
})
