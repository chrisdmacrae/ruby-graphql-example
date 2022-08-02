import {Tabs as TabsComponent, Tab as TabComponent} from './tabs'

export type Tabs = typeof TabsComponent & {
    Tab: typeof TabComponent
}

export const Tabs = TabsComponent as Tabs

Tabs.Tab = TabComponent