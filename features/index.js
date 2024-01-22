/**
    * The folder features contains features of all feature,
    * so here you will find folder names which are listed in root pages.
**/

/*
    Authentication
*/

import FeatureSignIn from './auth/sign-in/FeatureSignIn';


/*
    Master Data
*/

import FeaturePasien from './master-data/pasien/FeaturePasien';
import FeaturePasienCreate from './master-data/pasien/create/FeaturePasienCreate';
import FeaturePoli from './master-data/poli/FeaturePoli';
import FeaturePoliCreate from './master-data/poli/create/FeaturePoliCreate';
import FeatureProduk from './master-data/produk/FeatureProduk';
import FeatureProdukCreate from './master-data/produk/create/FeatureProdukCreate';
import FeatureRuangan from './master-data/ruangan/FeatureRuangan';
import FeatureRuanganCreate from './master-data/ruangan/create/FeatureRuanganCreate';
import FeatureStaff from './master-data/staff/FeatureStaff';
import FeatureStaffCreate from './master-data/staff/create/FeatureStaffCreate';

/*
    Operational
*/

import FeatureJanjiTemu from './operational/janji-temu/FeatureJanjiTemu';
import FeatureJanjiTemuCreate from './operational/janji-temu/create/FeatureJanjiTemuCreate';
import FeaturePenjualan from './operational/penjualan/FeaturePenjualan';
import FeaturePenjualanCreate from './operational/penjualan/create/FeaturePenjualanCreate';
import FeatureRekamMedis from './operational/rekam-medis/FeatureRekamMedis';
import FeatureTagihan from './operational/tagihan/FeatureTagihan';

/*
    Menejemen Stok
*/

import FeatureBarangMasuk from './menejemen-stok/barang-masuk/FeatureBarangMasuk';
import FeatureBarangKeluar from './menejemen-stok/barang-keluar/FeatureBarangKeluar';
import FeaturePenyesuaianBarang from './menejemen-stok/penyesuaian-barang/FeaturePenyesuaianBarang';


/*
    Pengaturan
*/

import FeaturePerusahaan from './pengaturan/perusahaan/FearurePerusahaan';

export {
    FeatureSignIn,

    FeaturePasien,
    FeaturePasienCreate,
    FeaturePoli,
    FeaturePoliCreate,
    FeatureProduk,
    FeatureProdukCreate,
    FeatureRuangan,
    FeatureRuanganCreate,
    FeatureStaff,
    FeatureStaffCreate,

    FeatureJanjiTemu,
    FeatureJanjiTemuCreate,
    FeaturePenjualan,
    FeaturePenjualanCreate,
    FeatureRekamMedis,
    FeatureTagihan,

    FeatureBarangMasuk,
    FeatureBarangKeluar,
    FeaturePenyesuaianBarang,

    FeaturePerusahaan,
};