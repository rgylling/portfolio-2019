import { compose, space, layout, flexbox, grid, color, position } from 'styled-system'
import styled from 'styled-components/macro'

export const Container = styled('div')(
  compose(
    space,
    layout,
    flexbox,
    grid,
    color,
		position
  )
)
