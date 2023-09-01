<template>
    <div>
        <header>
            <slot name="title"></slot>
        </header>
        <footer>
            <slot name="controls"></slot>
        </footer>
    </div>
</template>

<style scoped>
div {
   border: 2px solid black;
   padding: 1rem;
}
</style>