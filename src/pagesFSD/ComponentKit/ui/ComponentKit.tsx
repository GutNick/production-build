import { headers } from 'next/headers'
import React from 'react'

import { Button } from '@/shared/ui/Button/Button'

import '../../../shared/ui/Button/Button.css'
import styles from './page.module.css'

/**
 * ComponentKit component.
 *
 * This component renders a main section with a title, the current host, and the current path.
 * It also includes a Button component.
 *
 * @param props - The properties object.
 * @param props.params - The parameters object.
 * @param props.params.componentKitPath - An array representing the path of the component kit.
 *
 * @returns The rendered main section with the current host and path.
 */
export const ComponentKit = ({ params }: { params: { componentKitPath: string[] } }) => {
  const { componentKitPath } = params
  const headersList = headers()
  const hostName = headersList.get('x-forwarded-host')
  return (
    <main className={styles.main}>
      <h1>My Page</h1>
      <p>
        Current host is:
        {' '}
        {hostName}
      </p>
      <p>
        Current path is:
        {' '}
        {componentKitPath ? componentKitPath.join('/') : '/'}
      </p>
      <Button>Button</Button>
    </main>
  )
}
