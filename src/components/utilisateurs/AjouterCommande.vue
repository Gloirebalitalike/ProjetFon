<template>

<h1>Formulaire de Commande</h1>

<form id="orderForm">
    <label for="name">Nom:</label>
    <input type="text" id="name" name="name" required>

    <label for="phone">Numéro de Téléphone:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Format : 1234567890">

    <label for="mainCourse">Plat Principal:</label>
    <select id="mainCourse" name="mainCourse" required>
        <option value="pasta">Pâtes</option>
        <option value="pizza">Pizza</option>
        <option value="burger">Burger</option>
        <option value="burger">Frite et poulet</option>

        <!-- Ajoutez d'autres options selon le menu du restaurant -->

    </select>

    <label for="sideDishes">Accompagnements:</label>
    <textarea id="sideDishes" name="sideDishes" rows="4" placeholder="Séparez les accompagnements par des virgules"></textarea>

    <label for="comments">Commentaires (facultatif):</label>
    <textarea id="comments" name="comments" rows="4"></textarea>

    <button type="submit">Passer la Commande</button>
</form>

    
</template>

<script setup>
    
</script>

<style  scoped>

</style>