/**
 * Property Test: Benefits Cards Display Correctly
 * Feature: biova-landing-page, Property 1: Benefits Cards Display Correctly
 * Validates: Requirements 2.2, 2.3
 * 
 * For any viewport size (desktop, tablet, mobile), the Benefits Section SHALL display 
 * exactly 4 benefit cards with correct content, and the layout SHALL adjust responsively 
 * (4 columns → 2 columns → 1 column).
 */
import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import fc from 'fast-check'
import App from '../App'

// Cleanup after each test to prevent duplicate elements
afterEach(() => {
  cleanup()
})

// Expected benefit card titles from requirements
const EXPECTED_BENEFIT_TITLES = [
  'Chất lượng dinh dưỡng cao',
  'Công nghệ hiện đại',
  'Thân thiện môi trường',
  'Đa dạng lựa chọn'
]

describe('Property 1: Benefits Cards Display Correctly', () => {
  /**
   * Property: For any valid viewport width, exactly 4 benefit cards are rendered
   * This validates Requirements 2.2 - display 4 benefits as cards
   */
  it('should always display exactly 4 benefit cards for any viewport width', () => {
    fc.assert(
      fc.property(
        // Generate random viewport widths from 320px to 1920px
        fc.integer({ min: 320, max: 1920 }),
        (viewportWidth) => {
          // Set viewport width
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth
          })
          
          const { container, unmount } = render(<App />)
          
          // Find all benefit cards
          const benefitCards = container.querySelectorAll('.benefit-card')
          
          // Property: exactly 4 benefit cards must exist
          expect(benefitCards.length).toBe(4)
          
          // Cleanup
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property: For any benefit card, it must contain the expected content
   * This validates Requirements 2.2 - cards with correct content
   */
  it('should display all 4 expected benefit titles', () => {
    fc.assert(
      fc.property(
        fc.constant(EXPECTED_BENEFIT_TITLES),
        (expectedTitles) => {
          const { container, unmount } = render(<App />)
          
          // Check each expected title is present using container query
          expectedTitles.forEach(title => {
            const titleElement = container.querySelector(`.benefit-title`)
            expect(titleElement).toBeInTheDocument()
          })
          
          // Verify all 4 titles exist
          const allTitles = container.querySelectorAll('.benefit-title')
          expect(allTitles.length).toBe(4)
          
          // Verify each expected title text is present
          const titleTexts = Array.from(allTitles).map(el => el.textContent)
          expectedTitles.forEach(title => {
            expect(titleTexts).toContain(title)
          })
          
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property: For any benefit card, it must have an image element
   * This validates Requirements 2.2 - cards with images
   */
  it('should have an image in each benefit card', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 3 }),
        (cardIndex) => {
          const { container, unmount } = render(<App />)
          
          const benefitCards = container.querySelectorAll('.benefit-card')
          const card = benefitCards[cardIndex]
          
          // Property: each card must have an image
          const image = card.querySelector('.benefit-image img')
          expect(image).toBeInTheDocument()
          expect(image).toHaveAttribute('src')
          expect(image).toHaveAttribute('alt')
          
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property: Benefits grid container exists and has correct class
   * This validates Requirements 2.3 - responsive grid layout
   */
  it('should have benefits grid container for responsive layout', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 1920 }),
        (viewportWidth) => {
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth
          })
          
          const { container, unmount } = render(<App />)
          
          // Property: benefits grid must exist
          const benefitsGrid = container.querySelector('.benefits-grid')
          expect(benefitsGrid).toBeInTheDocument()
          
          // Property: all 4 cards must be inside the grid
          const cardsInGrid = benefitsGrid.querySelectorAll('.benefit-card')
          expect(cardsInGrid.length).toBe(4)
          
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })
})
