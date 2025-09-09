import React from 'react'
import './ChooseButton.scss'

function ChooseButton() {
  return (
        <div class="button-wrapper">
            <button class="gradient-button">
                <span class="gradient-border"></span>
                <span class="button-content">
                    <div class="button-inner">
                        <span class="button-text">Choose Your Gaming World</span>
                        <svg
                            class="button-icon"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </span>
            </button>
        </div>

  )
}

export default ChooseButton