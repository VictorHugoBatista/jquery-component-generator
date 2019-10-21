export default class {
  constructor($componentRoot) {
    if (this.initializeElements($componentRoot)) {
      // This is your secure area, where your important elements
      // certainly exists. Call all your things here.
    }
  }

  /**
   * Verify if all your important elements exists and fill the elements object.
   * Feel free to rename the $componentRoot variable to what do better to your work.
   */
  initializeElements($componentRoot) {
    if (! $componentRoot.length) {
      return false
    }
    this.elements = {
      $componentRoot,
    };
    return true;
  }

  // ADD YOUR METHODS HERE.
}
