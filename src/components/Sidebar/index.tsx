import React from 'react'
import { NavLink } from 'react-router-dom'
import { darken } from 'polished'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import { Activity, MessageSquare, Shuffle, Layers } from 'react-feather'

import Row, { RowFixed } from '../Row'
import { ExternalLink } from '../../theme'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 0px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  display: block;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 0.1rem;
    width: calc(100%);
    position: relative;
    display: none;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.1rem 0.1rem;
        display: none;
  `}
  padding-top: 18px;
  max-width: 180px;
`

const HeaderRow = styled(RowFixed)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

const HeaderLinks = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.mediaWidth.upToMedium`
`};
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 0rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;
  width: 100%;
  flex-grow: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &.${activeClassName} {
    border-radius: 0px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const StyledExternalLink = styled(ExternalLink).attrs({
  activeClassName
})<{ isActive?: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 0rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &.${activeClassName} {
    border-radius: 0px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }

`

export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

const Spacer = styled.span`
  width: 8px;
`

export default function Sidebar() {
  const { t } = useTranslation()
  return (
    <HeaderFrame>
      <HeaderRow>
        <HeaderLinks>
          <StyledNavLink
            id={`swap-nav-link`}
            to={'/exchange'}
            isActive={(match, { pathname }) =>
              Boolean(match) ||
              pathname.startsWith('/exchange') ||
              pathname === '/'
            }
          >
            <Shuffle size={20} />
            <Spacer />
            {t('Exchange')}
          </StyledNavLink>
          <StyledNavLink
            id={`pool-nav-link`}
            to={'/liquidity'}
            isActive={(match, { pathname }) =>
              Boolean(match) ||
              pathname.startsWith('/add') ||
              pathname.startsWith('/remove') ||
              pathname.startsWith('/create') ||
              pathname.startsWith('/find')
            }
          >
            <Layers size={20} />
            <Spacer />
            {t('Liquidity')}
          </StyledNavLink>
          <StyledExternalLink
            id={`nav-discord`}
            href={'https://discord.gg/Smm8zjEuyB'}
          >
            <MessageSquare size={20} />
            <Spacer />
            Discord <span style={{ fontSize: '11px' }}>↗</span>
          </StyledExternalLink>
          <StyledExternalLink
            id={`nav-analytics`}
            href={'https://info.u.exchange'}
          >
            <Activity size={20} />
            <Spacer />
            Analytics <span style={{ fontSize: '11px' }}>↗</span>
          </StyledExternalLink>
          {/*<StyledNavLink id={`stake-nav-link`} to={'/uni'}>
            UNI
          </StyledNavLink>
          <StyledNavLink id={`stake-nav-link`} to={'/vote'}>
            Vote
          </StyledNavLink>
          <StyledExternalLink id={`stake-nav-link`} href={'https://info.u.exchange'}>
            Info <span style={{ fontSize: '11px' }}>↗</span>
          </StyledExternalLink>*/}
        </HeaderLinks>
      </HeaderRow>
    </HeaderFrame>
  )
}
