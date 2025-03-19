<template>
  <div class="border w-full py-3 flex items-center px-4 justify-between">
    <!-- Logo -->
    <img src="../assets/logo.jpg" class="w-24 md:w-32" />

    <!-- Menu Desktop -->
    <NavigationMenu class="hidden md:flex">
      <NavigationMenuList class="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/maps" :class="navigationMenuTriggerStyle()">
            Explore
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" :class="navigationMenuTriggerStyle()">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Menu Mobile (Drawer) -->
    <Drawer  >
      <DrawerTrigger class="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      <DrawerContent :disable-outside-pointer-events="true" class="px-4 py-5 bg-white">
        <div class="flex flex-col space-y-4">
          <NavigationMenuLink href="/" class="w-full block">
            Home
          </NavigationMenuLink>
          <NavigationMenuLink href="/maps" class="w-full block">
            Explore
          </NavigationMenuLink>
          <NavigationMenuLink href="/contact" class="w-full block">
            Contact
          </NavigationMenuLink>
          <NavigationMenuLink href="/about" class="w-full block">
            About
          </NavigationMenuLink>
        </div>
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
