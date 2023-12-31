import { createRoot } from 'react-dom/client'

import { App } from '@App/App'

const container = document.getElementById('rootMyApp')
const root = createRoot(container!)

root.render(
    <div>
        <App />
    </div>
)
