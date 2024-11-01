import { __ } from '@wordpress/i18n';
import { ToggleControl, RadioControl, BaseControl, PanelBody, ColorPalette, RangeControl } from '@wordpress/components';

const ChartSettings = ({ attributes, setAttributes, colorPalette }) => {
  const { showLegend, legendStyle, legendBG, chartType, chartWidth } = attributes;

  const handleAttributeChange = (attribute) => (value) => setAttributes({ [attribute]: value });

  return (
    <PanelBody title={__('Pie Chart Settings', 'simple-pie-chart-block-for-wp')}>

      <RadioControl
        label={__('Chart Type', 'simple-pie-chart-block-for-wp')}
        selected={chartType}
        options={[
          { label: __('Pie', 'simple-pie-chart-block-for-wp'), value: 'Pie' },
          { label: __('Doughnut', 'simple-pie-chart-block-for-wp'), value: 'Doughnut' }
        ]}
        onChange={handleAttributeChange('chartType')}
      />

      <BaseControl
        label={__('Chart Width', 'simple-pie-chart-block-for-wp')}
        id="chart-width-control"
      >
        <RangeControl
          value={chartWidth}
          onChange={handleAttributeChange('chartWidth')}
          min={400}
          max={1200}
          step={10}
          aria-label={__('Chart Width', 'simple-pie-chart-block-for-wp')}
        />
      </BaseControl>

      <ToggleControl
        label={__('Show Legend', 'simple-pie-chart-block-for-wp')}
        checked={showLegend}
        onChange={handleAttributeChange('showLegend')}
      />

      {showLegend && (
        <>
          <RadioControl
            label={__('Legend Style', 'simple-pie-chart-block-for-wp')}
            selected={legendStyle}
            options={[
              { label: __('Lines', 'simple-pie-chart-block-for-wp'), value: 'line' },
              { label: __('Dots', 'simple-pie-chart-block-for-wp'), value: 'dot' }
            ]}
            onChange={handleAttributeChange('legendStyle')}
          />

          <BaseControl
            __nextHasNoMarginBottom
            id="legend-bg-color"
            label={__('Legend Background Color', 'simple-pie-chart-block-for-wp')}
          >
            <ColorPalette
              id="legend-bg-color"
              aria-label={__('Color palette for legend background', 'simple-pie-chart-block-for-wp')}
              colors={colorPalette}
              value={legendBG}
              onChange={handleAttributeChange('legendBG')}
            />
          </BaseControl>
        </>
      )}

    </PanelBody>
  );
};

export default ChartSettings;