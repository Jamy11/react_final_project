<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/', 'ProjectController@index')->name('home');

/* Common */
Route::post('/login','Log_Reg_Controller@login_check');
Route::get('/logout','LogOutController@index');

/* Admin Routes */

Route::get('/admin/admins', 'AdminController@admin_list');
Route::get('/admin/users', 'AdminController@user_list');
Route::resource('admin', 'AdminController')->only(['show', 'update']);


/* User Routes */

//Route::get('/register','Log_Reg_Controller@reg_index')->name('register');
Route::post('/register','Log_Reg_Controller@reg_check');


Route::get('/user/dashboard','UserController@index')->name('user.home');


Route::get('/user/update','UserController@update')->name('user.update');
Route::post('/user/update','UserController@store');


Route::get('/user/changeimage','UserController@updateImage')->name('user.updateImage');
Route::post('/user/changeimage','UserController@storeImage');


Route::get('/user/update-subscription','UserController@update_subs')->name('user.update_subs');




Route::get('/user/new-proj','ProjectController@newProj')->name('proj.newProj');
Route::post('/user/new-proj','ProjectController@storeNewProj');


Route::get('/user/view-proj','ProjectController@viewProj')->name('proj.viewProj');

Route::get('/user/update-proj','ProjectController@updateProj')->name('proj.updateProj');

Route::get('/user/update-projform/{id}','ProjectController@updateProjForm')->name('proj.updateProjForm');
Route::post('/user/update-projform/{id}','ProjectController@storeProjForm');

Route::get('/user/delete-proj/{id}','ProjectController@deleteProjView')->name('proj.deleteProjForm');
Route::post('/user/delete-proj/{id}','ProjectController@deleteProj');

Route::post('/{project}', 'LikeController@store')->name('like.store');
Route::delete('/{project}', 'LikeController@destroy')->name('like.destroy');

Route::get('/user/stripe-payment/{id}', 'StripeController@handleGet')->name('stripe-payment');
Route::post('/user/stripe-payment/{id}', 'StripeController@handlePost')->name('stripe.payment');

Route::get('project/{id}', 'ProjectController@viewIndProj')->name('proj.viewIndProj');

Route::get('/project/stripe-payment/{id}', 'StripeController@projStripePay')->name('projStripe.payment');
Route::post('/project/stripe-payment/{id}', 'StripeController@projStripePayVeri')->name('projStripe.payment');
