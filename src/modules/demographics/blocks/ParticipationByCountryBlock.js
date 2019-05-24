import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import Block from 'core/components/Block'
import ChartContainer from 'core/charts/ChartContainer'
import ParticipationByCountryMapChart from '../charts/ParticipationByCountryMapChart'

const ParticipationByCountryBlock = ({ block, data }) => {
    const blockData = useMemo(() => data.data.aggregations.find(agg => agg.id === block.id), [
        block.id,
        data.data.aggregations
    ])

    console.log(blockData)

    return (
        <Block id={block.id} showDescription={true}>
            <ChartContainer>
                <ParticipationByCountryMapChart data={blockData.breakdown.buckets} />
            </ChartContainer>
        </Block>
    )
}

ParticipationByCountryBlock.propTypes = {
    block: PropTypes.shape({
        id: PropTypes.string.isRequired
    }).isRequired,
    data: PropTypes.shape({
        data: PropTypes.shape({
            aggregations: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired
                })
            ).isRequired
        }).isRequired
    }).isRequired
}

export default memo(ParticipationByCountryBlock)
