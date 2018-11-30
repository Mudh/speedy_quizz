<?php

namespace App\Repository;

use App\Entity\JokerQuantity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method JokerQuantity|null find($id, $lockMode = null, $lockVersion = null)
 * @method JokerQuantity|null findOneBy(array $criteria, array $orderBy = null)
 * @method JokerQuantity[]    findAll()
 * @method JokerQuantity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class JokerQuantityRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, JokerQuantity::class);
    }

    //Va chercher la ligne correspondant au mail de l'utilisateur et au nom du joker
    public function getUserJoker($userEmail, $jokerName) {
        $queryBuilder = $this->createQueryBuilder('quantity')
            ->join('quantity.username', 'u')
            ->join('quantity.joker', 'j')
            ->andWhere('u.email = :userEmail')
            ->andWhere('j.name = :jokerName')
            ->setParameter(':userEmail', $userEmail)
            ->setParameter(':jokerName', $jokerName)
            ->getQuery();

            return $queryBuilder->execute();
    }

    // /**
    //  * @return JokerQuantity[] Returns an array of JokerQuantity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('j')
            ->andWhere('j.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('j.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?JokerQuantity
    {
        return $this->createQueryBuilder('j')
            ->andWhere('j.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
