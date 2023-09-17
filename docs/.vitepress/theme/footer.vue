<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

import packageInfo from '../../../package.json'

const powerList: string[] = ['vitepress']

interface PackageInfo {
  devDependencies?: { [key: string]: string }
}

/**
 * Represents a filtered dependency.
 */
interface FilteredDependency {
  /**
   * The name of the dependency.
   */
  name: string

  /**
   * The version of the dependency.
   */
  version: string
}

const filterDevDependencies = (
  packageInfo: PackageInfo,
  powerList: string[]
): FilteredDependency[] => {
  const devDependencies = packageInfo.devDependencies || {}
  const filteredDevDependencies: FilteredDependency[] = []
  for (const key of powerList) {
    if (devDependencies.hasOwnProperty(key)) {
      filteredDevDependencies.push({
        name: key,
        version: devDependencies[key],
      })
    }
  }
  return filteredDevDependencies
}

const showPowerList: FilteredDependency[] = filterDevDependencies(packageInfo, powerList)
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="layout-bottom">
        Power by {{ showPowerList.map(item => `${item.name}: ${item.version}`) }}
      </div>
    </template>
  </Layout>
</template>

<style lang="scss">
.layout-bottom {
  text-align: center;
  margin-bottom: 20px;
  color: var(--vp-home-hero-name-color);
}
</style>
