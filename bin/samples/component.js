export default {
  /**
   * Store all important data to use without access the DOM directly.
   */
  state: {},

  /**
   * Here is where all your important jQuery elements is stored.
   */
  elements: {},

  initialize() {
    if (this.initializeElements()) {
      // This is your secure area, where your important elements certainly
      // exists, as start the events, by example. Call all your things here.
      this.initializeEvents();
    }
  },

  /**
   * Verify if all your important elements exists and fill the elements object.
   * Feel free to rename the $componentRoot variable to what do better to your work.
   */
  initializeElements() {
    const $componentRoot = $('<YOUR-COMPONENT-ROOT-SELECTOR>');
    if (! $componentRoot.length) {
      return false
    }
    this.elements = {
      $componentRoot,
    };
    return true;
  },

  /**
   * Start the component events. Please split this in different methods if this become too great.
   */
  initializeEvents() {
    this.$componentRoot.on('<EVENT>', event => {
      // The arrow function let you use this for the current object properties and methods but
      // block you to get the event target using the classe $(this) statement. The solution is
      // to use the currentTarget property of the event parameter as below.
      const $this = $(event.currentTarget),
        something = $this.data('something');

      // Do your thing in a separate method just in case you need to
      // call it from another event or instance. Makes your code more legible too.
      this.updateSomething(something);
    });
  },

  /**
   * Do some specific thing.
   * @param {*} something
   */
  updateSomething(something) {
    console.log(something);
  }

  // ADD YOUR METHODS HERE.
};
