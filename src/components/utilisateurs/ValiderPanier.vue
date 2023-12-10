<template>

<h2>Validation du Panier</h2>

<form id="cartForm" onsubmit="return validateCart()">
    <label for="item1">Article 1:</label>
    <input type="number" id="item1" name="item1" min="0" value="0">

    <label for="item2">Article 2:</label>
    <input type="number" id="item2" name="item2" min="0" value="0">

    <label for="item3">Article 3:</label>
    <input type="number" id="item3" name="item3" min="0" value="0">

    <button type="submit">Valider le Panier</button>
</form>






    
</template>

<script setup>
    
</script>

<style  scoped>

</style>

