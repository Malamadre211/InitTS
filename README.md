# **L'opérateur conditionnel (ternary operator)**

Formule : **condition ? valeur_si_true : valeur_si_false ;**

```JS 
// Condition traditionnelle JavaScript :
if (something) {
  console.log('Yes')
} else {
  console.log('No')
}

// Condition ternaire JavaScript :
something ? console.log('Yes') : console.log('No')
// [condition] ? [if] : [else] 
``` 

## condition
Une expression qui est évaluée en un booléen (true ou false).

## exprSiVrai
Une expression qui est évaluée si la condition est équivalente à true (truthy)

## exprSiFaux
Une expression qui est évaluée si la condition est équivalente à false (falsy).

**SI condition vaut true, l'opérateur renverra la valeur d'exprSiVrai; dans le cas contraire, il renverra la valeur de exprSiFaux.**

