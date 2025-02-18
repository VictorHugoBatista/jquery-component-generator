/**
 * Require the package 'jquery-mask-plugin' (https://igorescobar.github.io/jQuery-Mask-Plugin/) to work.
 *
 * How to use:
 * Import this file and call the initialize method inside the object:
 * import yourObjectName as './<PATH-TO-FILE>/<FILENAME>.js';
 * yourObjectName.initialize();
 *
 * /!\ Be sure you are calling initialize after your page be loaded, inside an $(() => {}), by example. /!\
 */

export default {
  /**
   * Object with the field wrapper selectors and masks for initialize.
   * Supports form generators as gravity forms by getting the selectors from wrapper, not the field itself.
   * HTML example:
   * <div class="field-wrapper-phone">
   *   <input type="text" name="phone" />
   * </div>
   */
  masks: {
    '<FIELD-WRAPPER-SELECTOR>': '<MASK>',
  },

  initialize() {
    this.startMasks();
  },

  /**
   * Initialize all the fields with the masks with the element existence verification.
   */
  startMasks() {
    $.each(this.masks, (wrapperFieldSelector, mask) => {
      const $wrapperField = $(wrapperFieldSelector);
      if (! $wrapperField.length) {
        return;
      }
      const $input = $wrapperField.find('input');
      if (! $input.length) {
        return;
      }
      $input.mask(mask);
    });
  },
};
