import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PlayListItem from '../components/PlayListItem'
import { PlaylistSong } from '../types'

describe('PlayListItem', () => {
  const mockSong: PlaylistSong = {
    id: '1',
    title: 'Test Song',
    artist: 'Test Artist',
    genre: 'Test Genre',
    duration: 180
  }

  const mockOnClick = () => {}

  it('renders unselected song', () => {
    const { container } = render(
      <PlayListItem 
        song={mockSong} 
        isSelected={false} 
        onClick={mockOnClick} 
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders selected song', () => {
    const { container } = render(
      <PlayListItem 
        song={mockSong} 
        isSelected={true} 
        onClick={mockOnClick} 
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders song with long title and artist', () => {
    const longSong: PlaylistSong = {
      id: '2',
      title: 'This is a very long song title that might wrap to multiple lines',
      artist: 'This is a very long artist name that might also wrap',
      genre: 'Test Genre',
      duration: 300
    }

    const { container } = render(
      <PlayListItem 
        song={longSong} 
        isSelected={false} 
        onClick={mockOnClick} 
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders song with short duration', () => {
    const shortSong: PlaylistSong = {
      id: '3',
      title: 'Short Song',
      artist: 'Short Artist',
      genre: 'Test Genre',
      duration: 45
    }

    const { container } = render(
      <PlayListItem 
        song={shortSong} 
        isSelected={false} 
        onClick={mockOnClick} 
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders song with long duration', () => {
    const longSong: PlaylistSong = {
      id: '4',
      title: 'Long Song',
      artist: 'Long Artist',
      genre: 'Test Genre',
      duration: 3661
    }

    const { container } = render(
      <PlayListItem 
        song={longSong} 
        isSelected={true} 
        onClick={mockOnClick} 
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
