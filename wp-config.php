<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
define('DB_NAME', 'zuoye_wdsox');
define('DB_USER', 'zuoye_wp6');
define('DB_PASSWORD', 'p5i4i7irx1');
define('DB_HOST', 'mysql7024.xserver.jp');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3xM.M/wVp5->#AVG)6C:}JKswa:lNwCX?:gb?oh)]+JZ_E8[Tgi4SjX+1T+X<]|Q');
define('SECURE_AUTH_KEY',  'TQDOdQJY13Z%R](w8407neK*UC:D0!uF=oR!TCa?#s{tHg}_2t47d0[g^+IDL!F_');
define('LOGGED_IN_KEY',    'B<#cr2:q%$FWiO<F7II.P0= rQe|y<.AWDoJA& YW2BYBHq`e+c5yuopIgr7C^98');
define('NONCE_KEY',        'JJG:SlvaZrig?=3H&+|%vWO^kTc^z$l^E^*!}2a?ayq@>AC-=RULf=FADg!>GyYw');
define('AUTH_SALT',        'R?z5QXtg&xr:JGVPp4s@=mv49g9]nsrk0fCM9&F&=z7!lL]!N[pa8gByL3[(A~))');
define('SECURE_AUTH_SALT', '_t$LJ>b51n4v1!Sy|dnQLvuBw>A_A,yf*?[u6IB@M${%b]@+6)^t :pO(=:m`*@o');
define('LOGGED_IN_SALT',   'kbu(SwnS%X}&U6e[`F[kgVdz8{BQ+mWguHL&o~YsW :BrnVZhj1BJoZ@HHDnag.;');
define('NONCE_SALT',       '5Yx;ah<e,vV6u<If8[d(~n9%}P)l{C*_suL|59_JZWauePb3T<,4FsU0MzYB%` 6');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
  define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
