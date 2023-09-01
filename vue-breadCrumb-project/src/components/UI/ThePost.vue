<template>
    <div>
        <header>
            <h2>
                <slot name="title"></slot>
            </h2>
        </header>
        <hr>
        <main>
            <p>
                <slot name="body"></slot>
            </p>
        </main>
    </div>
</template>


<style scoped>
div {
    border: 3px solid rgb(75, 75, 184);
    background-color: rgb(102, 102, 153);
    color: white;
    text-align: center;
}
</style>