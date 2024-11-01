import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const SliceControls = ({ handleAddSlice }) => {
  return (
    <Button
      className="add-slice-button"
      variant="primary"
      onClick={handleAddSlice}
      aria-label={__('Add Slice', 'simple-pie-chart-block-for-wp')}
    >
      {__('Add Slice', 'simple-pie-chart-block-for-wp')}
    </Button>
  );
};

export default SliceControls;