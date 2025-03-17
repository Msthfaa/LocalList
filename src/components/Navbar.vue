<template>
  <div class="border w-full py-3 flex px-4">
    <img src="../assets/logo.jpg" class="w-32 me-auto" />
    <NavigationMenu class="invisible md:visible">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/maps"
            :class="navigationMenuTriggerStyle()"
          >
            Explore
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            :class="navigationMenuTriggerStyle()"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            :class="navigationMenuTriggerStyle()"
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <Drawer>
      <DrawerTrigger class="cursor-pointer visible md:invisible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </DrawerTrigger>
      <DrawerContent class="px-4 py-3">
        <NavigationMenuLink  href="/" class="w-full block mb-3">
          Home
        </NavigationMenuLink>
        <NavigationMenuLink  href="/maps" class="w-full block mb-3">
          Explore
        </NavigationMenuLink>
        <NavigationMenuLink  href="/contact" class="w-full block mb-3">
          Contact
        </NavigationMenuLink>
        <NavigationMenuLink  href="/about" class="w-full block mb-3">
          About
        </NavigationMenuLink>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
</script>
