<template>

<h1>Formulaire de Commentaire</h1>

<form id="commentForm">
    <label for="name">Nom:</label>
    <input type="text" id="name" name="name" required>

    <label for="prenom">Prénom:</label>
    <input type="text" id="prenom" name="prenom" required>

    <label for="comment">Commentaire:</label>
    <textarea id="comment" name="comment" rows="4" required></textarea>

    <button type="submit">Ajouter le Commentaire</button>
</form>
    
    
</template>

<script setup>
    
</script>

<style  scoped>

</style>