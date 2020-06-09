import SiteHead from '@/components/SiteHead'
import BackButton from '@/components/BackButton'
import Goo from 'gooey-react'

import config from '@/lib/config'

const Blobs = () => {
  return (
    <div className="max-w-xs pt-10 m-auto text-center">
      <SiteHead
        title={`Colors - ${config.siteName}`}
        description="Colors in flashcard form."
      />
      <BackButton />
      <main>
        <Goo intensity="strong">
          <svg
            role="img"
            aria-label="Example of a gooey effect"
            className="w-64 h-64"
          >
            <g style={{animation: 'rotate_back 9s linear infinite'}}>
              <circle
                cx="50%"
                cy="50%"
                r="42"
                fill="lightseagreen"
                style={{
                  animation: 'blob_four 12s ease-in-out -3s infinite alternate'
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r="36"
                fill="mediumaquamarine"
                style={{
                  animation: 'blob_three 9s ease-in-out -3s infinite alternate'
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r="30"
                fill="palegreen"
                style={{
                  animation: 'blob_two 6s ease-in-out -3s infinite alternate'
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r="24"
                fill="mediumspringgreen"
                style={{
                  animation: 'blob_one 3s ease-in-out -3s infinite alternate'
                }}
              />
            </g>
          </svg>
        </Goo>
      </main>
    </div>
  )
}

export default Blobs
