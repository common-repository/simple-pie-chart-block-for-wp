<?php
/**
 * Plugin Name:       Simple Pie Chart Block for WP
 * Description:       Simple Pie Chart Block allows you to create elegant and minimal pie charts using the ChartJS library.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.5
 * Author:            Chee Studio
 * Author URI:        https://chee.studio/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-pie-chart-block-for-wp
 *
 * @package Simple Pie Chart Block for WP
 */

 if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

function chee_spcb_init_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'chee_spcb_init_block' );
