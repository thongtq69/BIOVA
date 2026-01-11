/**
 * Property Test: Solutions Cards Display with Distinct Colors
 * Feature: biova-landing-page, Property 2: Solutions Cards Display with Distinct Colors
 * Validates: Requirements 5.1, 5.3
 * 
 * For any of the 6 solution cards, each card SHALL have a distinct background color 
 * different from the others, and the grid layout SHALL maintain proper structure 
 * across all viewport sizes.
 */
import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import fc from 'fast-check'
import App from '../App'

// Cleanup after each test to prevent duplicate elements
afterEach(() => {
  cleanup()
})

// Expected solution card classes with distinct colors from design
const SOLUTION_CARD_CLASSES = [
  'solution-card-1',
  'solution-card-2',
  'solution-card-3',
  'solution-card-4',
  'solution-card-5',
  'solution-card-6'
]

// Expected solution titles from requirements 5.1
const EXPECTED_SOLUTION_TITLES = [
  'An toàn cho vật nuôi và môi trường',
  'Thay thế đạm động vật bằng sản phẩm giá rẻ, chất lượng cao',
  'Phát triển mô hình kinh tế tuần hoàn, sản xuất khép kín',
  'Thúc đẩy nghiên cứu, ứng dụng công nghệ cao trong nông nghiệp',
  'Hỗ trợ cộng đồng mở rộng quy mô chăn nuôi',
  'Hướng đến chăn nuôi xanh - an toàn - bền vững'
]

describe('Property 2: Solutions Cards Display with Distinct Colors', () => {
  /**
   * Property: For any viewport width, exactly 6 solution cards are rendered
   * This validates Requirements 5.1 - display 6 solutions as cards
   */
  it('should always display exactly 6 solution cards for any viewport width', () => {
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
          
          const solutionCards = container.querySelectorAll('.solution-card')
          
          // Property: exactly 6 solution cards must exist
          expect(solutionCards.length).toBe(6)
          
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property: Each solution card has a distinct color class
   * This validates Requirements 5.3 - cards with distinct colors
   */
  it('should have each solution card with a distinct color class', () => {
    fc.assert(
      fc.property(
        fc.constant(SOLUTION_CARD_CLASSES),
        (expectedClasses) => {
          const { container, unmount } = render(<App />)
          
          // Check each expected color class exists on exactly one card
          expectedClasses.forEach(colorClass => {
            const cardsWithClass = container.querySelectorAll(`.${colorClass}`)
            expect(cardsWithClass.length).toBe(1)
          })
          
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property: For any pair of solution cards, they have different color classes
   * This validates Requirements 5.3 - each card has distinct color
   */
  it('should have all solution cards with unique color classes', () => {
    fc.assert(
      fc.property(
        // Generate pairs of different card indices
        fc.tuple(
          fc.integer({ min: 0, max: 5 }),
          fc.integer({ min: 0, max: 5 })
        ).filter(([a, b]) => a !== b),
        ([cardIndex1, cardIndex2]) => {
          const { container, unmount } = render(<App />)
          
          const solutionCards = container.querySelectorAll('.solution-card')
          const card1 = solutionCards[cardIndex1]
          const card2 = solutionCards[cardIndex2]
          
          // Get the color class for each card
          const getColorClass = (card) => {
            return SOLUTION_CARD_CLASSES.find(cls => card.classList.contains(cls))
          }
          
          const colorClass1 = getColorClass(card1)
          const colorClass2 = getColorClass(card2)
          
          // Property: different cards must have different color classes
          expect(colorClass1).not.toBe(colorClass2)
          
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property: Solutions grid container exists for responsive layout
   * This validates Requirements 5.2 - grid layout
   */
  it('should have solutions grid container for responsive layout', () => {
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
          
          // Property: solutions grid must exist
          const solutionsGrid = container.querySelector('.solutions-grid')
          expect(solutionsGrid).toBeInTheDocument()
          
          // Property: all 6 cards must be inside the grid
          const cardsInGrid = solutionsGrid.querySelectorAll('.solution-card')
          expect(cardsInGrid.length).toBe(6)
          
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Property: Each solution card displays the expected content
   * This validates Requirements 5.1 - 6 solutions with correct content
   */
  it('should display all 6 expected solution titles', () => {
    fc.assert(
      fc.property(
        fc.constant(EXPECTED_SOLUTION_TITLES),
        (expectedTitles) => {
          const { container, unmount } = render(<App />)
          
          const allTitles = container.querySelectorAll('.solution-title')
          expect(allTitles.length).toBe(6)
          
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
})
